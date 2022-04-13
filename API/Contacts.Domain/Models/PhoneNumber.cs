namespace Contacts.Domain.Models;

using Common;
using Exceptions;
using static ModelConstraints.PhoneNumber;

public class PhoneNumber : ValueObject
{
    internal PhoneNumber(string number)
    {
        this.Validate(number);

        if (!number.StartsWith(PhoneNumberFirstSymbol))
        {
            throw new InvalidPhoneNumberException($"Phone number must start with a '{PhoneNumberFirstSymbol}'.");
        }

        this.Number = number;
    }

    public string Number { get; }

    // Conversion operators (in Contact -> PhoneNumber PhoneNumber = string phoneNumber)
    public static implicit operator string(PhoneNumber number) => number.Number;

    public static implicit operator PhoneNumber(string number) => new PhoneNumber(number);

    private void Validate(string phoneNumber) 
        => Guard.ForStringLength<InvalidPhoneNumberException>(
            phoneNumber,
            MinPhoneNumberLength,
            MaxPhoneNumberLength,
            nameof(PhoneNumber));
}