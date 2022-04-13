namespace Contacts.Application.Features.Contact.Queries;

using Contracts;
using Domain.Models;
using Search;

public interface IContactRepository: IRepository<Contact>
{
    Task<IEnumerable<ContactListingModel>> GetContactsListings(
        string? firstName = default,
        CancellationToken cancellationToken = default);

    Task<int> Total(CancellationToken cancellationToken = default);
}