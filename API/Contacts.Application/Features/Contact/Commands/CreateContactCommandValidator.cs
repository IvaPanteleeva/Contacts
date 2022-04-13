namespace Contacts.Application.Features.Contact.Commands;

using FluentValidation;
using static Domain.ModelConstraints.Common;
using static Domain.ModelConstraints.PhoneNumber;
public class CreateUserCommandValidator: AbstractValidator<CreateContactCommand>
{
    public CreateUserCommandValidator()
    {
        this.RuleFor(u => u.FirstName)
            .MinimumLength(MinNameLength)
            .WithMessage("First name must be at least 2 symbols!")
            .MaximumLength(MaxNameLength)
            .NotEmpty()
            .WithMessage("First name is mandatory!");

        this.RuleFor(u => u.Surname)
            .MinimumLength(MinNameLength)
            .MaximumLength(MaxNameLength)
            .NotEmpty();
        

        this.RuleFor(u => u.PhoneNumber)
            .MinimumLength(MinPhoneNumberLength)
            .MaximumLength(MaxPhoneNumberLength)
            .Matches(PhoneNumberRegularExpression)
            .NotEmpty();
    }
}