namespace Contacts.Infrastructure.Persistence.Repositories;

using Application.Features.Contact.Queries;
using Application.Features.Contact.Queries.Search;
using Domain.Models;
using Microsoft.EntityFrameworkCore;

internal class ContactRepository: DataRepository<Contact>, IContactRepository
{
    public ContactRepository(ContactsDbContext db) : base(db)
    {
    }

    public async Task<IEnumerable<ContactListingModel>> GetContactsListings(string? firstName = default, CancellationToken cancellationToken = default)
    {
        var query = this.All();

        if (!string.IsNullOrWhiteSpace(firstName))
        {
            query = query.Where(contact => contact.FirstName.ToLower().Contains(firstName.ToLower()));
        }

        query = query.AsNoTracking();
        // We can add AutoMapper
        return await query
            .Select(contact => new ContactListingModel(
                contact.Id,
                contact.FirstName,
                contact.Surname,
                contact.Address,
                contact.IBAN,
                contact.PhoneNumber, 
                contact.DateOfBirth))
            .ToListAsync(cancellationToken);
    }

    public async Task<int> Total(CancellationToken cancellationToken = default)
    {
        return await this
            .All()
            .CountAsync(cancellationToken);
    }
    
}