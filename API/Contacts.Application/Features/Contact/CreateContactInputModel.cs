namespace Contacts.Application.Features.Contact;

public class CreateContactInputModel
{
    public CreateContactInputModel(string firstName, string surname, string address, string iban, DateTime dateOfBirth, string phoneNumber)
    {
        this.FirstName = firstName;
        this.Surname = surname;
        this.Address = address;
        this.IBAN = iban;
        this.PhoneNumber = phoneNumber;
        this.DateOfBirth = dateOfBirth;
    }
    public string FirstName { get; set; }
    
    public string Surname  { get; set; }

    public DateTime DateOfBirth { get; set; }

    public string Address { get; set; }

    public string IBAN { get; set; }
    
    public string PhoneNumber { get; set; }
}