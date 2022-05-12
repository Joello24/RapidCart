using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RapidCart.Core;

namespace RapidCart.Web.Controllers
{
    [Route("api/[controller]")]
    public class AddressController : ControllerBase
    {
        private readonly IAddressRepository _addressRepository;

        public AddressController(IAddressRepository addressRepository)
        {
            _addressRepository = addressRepository;
        }

        [HttpGet]
        [Route("/api/[controller]/{id}")]
        public IActionResult GetAddress(int id)
        {
            var result = _addressRepository.Get(id);

            if (result == null)
            {
                return NotFound();
            }
            if (result.Success)
            {
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpDelete("{id}"), Authorize]
        public IActionResult DeleteAddress(int addressId)
        {
            var findAddress = _addressRepository.Get(addressId);
            if (!findAddress.Success)
            {
                return NotFound(findAddress.Message);
            }

            var result = _addressRepository.Delete(addressId);
            if (result.Success)
            {
                return Ok("Address delete was successful");
            }
            else
            {
                return BadRequest(result.Message);
            }
        }
        [HttpPut, Authorize]
        public IActionResult UpdateAddress(Address viewAddress)
        {
            if (ModelState.IsValid)
            {
                var address = new Address()
                {
                    AddressId = viewAddress.AddressId,
                    UserId = viewAddress.UserId,
                    Street = viewAddress.Street,
                    City = viewAddress.City,
                    State = viewAddress.State,
                    PostalCode = viewAddress.PostalCode,
                    CountryCode = viewAddress.CountryCode,
                };
                var result = _addressRepository.Update(address);
                if (result.Success)
                {
                    return Ok("Address update was successful");
                }
                else
                {
                    return BadRequest(result.Message);
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
        [HttpPost, Authorize]
        public IActionResult InsertAddress(Address viewAddress)
        {
            if (ModelState.IsValid)
            {
                var address = new Address()
                {
                    AddressId = viewAddress.AddressId,
                    UserId = viewAddress.UserId,
                    Street = viewAddress.Street,
                    City = viewAddress.City,
                    State = viewAddress.State,
                    PostalCode = viewAddress.PostalCode,
                    CountryCode = viewAddress.CountryCode,
                };
                var result = _addressRepository.Insert(address);
                if (result.Success)
                {
                    return CreatedAtAction(nameof(Address), new { id = address.AddressId }, address);
                }
                else
                {
                    return BadRequest(result.Message);
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}
