namespace Contacts.Domain.Exceptions;

public class InvalidContactException: BaseDomainException
{
    public InvalidContactException()
    {
        
    }
    
    public InvalidContactException(string message) => this.Message = message;
}   