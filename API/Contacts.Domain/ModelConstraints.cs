namespace Contacts.Domain;

public class ModelConstraints
{
    public class PhoneNumber
    {
        public const int MinPhoneNumberLength = 5;
        public const int MaxPhoneNumberLength = 20;
        public const string PhoneNumberFirstSymbol = "+";
        public const string PhoneNumberRegularExpression = @"\+[0-9]*";
    }
    
    public class Common
    {
        public const int MinNameLength = 2;
        public const int MaxNameLength = 20;
        public const int MaxUrlLength = 2048;
        public const int Zero = 0;
    }
}