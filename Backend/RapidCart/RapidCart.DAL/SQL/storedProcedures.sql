-- *** STORED PROCEDURES GO HERE ***

CREATE procedure SearchItemsByName(@searchTerm varchar(50))
as
begin
    select
        *
    from Item i
    where
            i.Name like '%' + @searchTerm + '%'
end
go
