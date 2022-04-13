namespace Contacts.Domain.Factories.Contact;

using Models;

public interface IContactFactory : IFactory<Contact>
{
    IContactFactory WithName(string firstName);
    
    IContactFactory WithSurname(string firstName);
    
    IContactFactory WithAddress(string address);
    
    IContactFactory WithIban(string iban);
    
    IContactFactory WithDateOfBirth(DateTime dateOfBirth);

    IContactFactory WithPhoneNumber(string phoneNumber);
}   