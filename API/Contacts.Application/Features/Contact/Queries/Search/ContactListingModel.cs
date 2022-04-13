namespace Contacts.Application.Features.Contact.Queries.Search;

public class ContactListingModel
{
    public ContactListingModel(int id, string firstName, string surname, string address, string iban, string phoneNumber, DateTime dateOfBirth)
    {
        this.Id = id;
        this.FirstName = firstName;
        this.Surname = surname;
        this.Address = address;
        this.IBAN = iban;
        this.PhoneNumber = phoneNumber;
        this.DateOfBirth = dateOfBirth;
    }
    public int Id { get; set; }
    
    public string FirstName { get; set; }
    
    public string Surname  { get; set; }

    public DateTime DateOfBirth { get; set; }

    public string Address { get; set; }

    public string IBAN { get; set; }
    
    public string PhoneNumber { get; set; }
}