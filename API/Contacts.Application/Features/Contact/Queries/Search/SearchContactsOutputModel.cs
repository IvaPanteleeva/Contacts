namespace Contacts.Application.Features.Contact.Queries.Search;

public class SearchContactsOutputModel
{
    internal SearchContactsOutputModel(IEnumerable<ContactListingModel> contacts, int total)
    {
        this.Contacts = contacts;
        this.Total = total;
    }

    public IEnumerable<ContactListingModel> Contacts { get; }

    public int Total { get; }
}