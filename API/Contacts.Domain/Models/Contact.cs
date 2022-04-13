namespace Contacts.Domain.Models;

using Common;
using Exceptions;
using static ModelConstraints.Common;

public class Contact: Entity<int>, IAggregateRoot
{

    internal Contact(string firstName, string surname, DateTime dateOfBirth, string address, string iban, string phoneNumber)
    {
        // We have to validate all the  arguments  before setting properties values
        this.Validate(firstName);

        this.FirstName = firstName;
        this.Surname = surname;
        this.DateOfBirth = dateOfBirth;
        this.Address = address;
        this.IBAN = iban;
        this.PhoneNumber = phoneNumber;
    }
    
    // Private constructors for Entity Framework Core to use
    private Contact(string firstName)
    {
        this.FirstName = firstName;
        this.Surname = null!;
        this.DateOfBirth = new DateTime();
        this.Address = null!;
        this.IBAN = null!;
        this.PhoneNumber = null!;
    }
    
    public string FirstName { get; }
    
    public string Surname  { get; set; }

    public DateTime DateOfBirth { get; set; }

    public string Address { get; set; }

    // We should create a class for the iban like PhoneNumber
    public string IBAN { get; set; }
    
    public PhoneNumber PhoneNumber { get; }
    
    private void Validate(string name)
        => Guard.ForStringLength<InvalidContactException>(
            name,
            MinNameLength,
            MaxNameLength,
            nameof(this.FirstName));
}       