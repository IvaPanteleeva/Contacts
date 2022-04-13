namespace Contacts.Domain.Models;

using Exceptions;
using FluentAssertions;
using Xunit;

// If we have big objects, we can add FakeItEasy for example and create dummy objects
public class PhoneNumberSpecs
{
    [Fact]
    public void ValidPhoneNumberShouldNotThrowException()
    {
        // Act
        Action act = () => new PhoneNumber("+35989713488");

        // Assert
        act.Should().NotThrow<InvalidPhoneNumberException>();
    }
    
    [Fact]
    public void CreatePhoneNumberShouldMutateNumber()
    {
        // Act
        var phone = new PhoneNumber("+35989713488");

        // Assert
        phone.Number.Should().Be("+35989713488");
    }
    
    [Fact]
    public void InvalidPhoneNumberShouldThrowException()
    {
        // Act
        Action act = () => new PhoneNumber("35989713488");

        // Assert
        act.Should().Throw<InvalidPhoneNumberException>();
    }

    [Fact]
    public void InvalidPhoneNumberMinDigitsShouldThrowException()
    {
        // Act
        Action act = () => new PhoneNumber("1234");

        // Assert
        act.Should().Throw<InvalidPhoneNumberException>();
    }
}