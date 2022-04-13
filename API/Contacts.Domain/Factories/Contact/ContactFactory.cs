namespace Contacts.Domain.Factories.Contact;

using Models;

internal class ContactFactory : IContactFactory
{
    private string contactName = default!;
    private string contactSurname = default!;
    private string contactPhoneNumber = default!;
    private string contactIban = default!;
    private string contactAddress = default!;
    private DateTime contactDateOfBirth = default!;

    public IContactFactory WithName(string name)
    {
        this.contactName = name;
        return this;
    }
    
    public IContactFactory WithSurname(string name)
    {
        this.contactSurname = name;
        return this;
    }

    public IContactFactory WithAddress(string address)
    {
        this.contactAddress = address;
        return this;
    }

    public IContactFactory WithIban(string iban)
    {
        this.contactIban = iban;
        return this;
    }

    public IContactFactory WithDateOfBirth(DateTime dateOfBirth)
    {
        this.contactDateOfBirth = dateOfBirth;
        return this;
    }

    public IContactFactory WithPhoneNumber(string phoneNumber)
    {
        this.contactPhoneNumber = phoneNumber;
        return this;
    }
    

    public Contact Build() => new Contact(this.contactName, this.contactSurname, this.contactDateOfBirth, this.contactAddress, this.contactIban, this.contactPhoneNumber);
    
    // add this because factories do not have compile-time type safety. 
    public Contact Build(string firstName, string surname, DateTime dateOfBirth, string address, string iban, string phoneNumber)
        => this
            .WithName(firstName)
            .WithSurname(surname)
            .WithDateOfBirth(dateOfBirth)
            .WithAddress(address)
            .WithIban(iban)
            .WithPhoneNumber(phoneNumber)
            .Build();
}