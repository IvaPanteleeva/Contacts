namespace Contacts.Application.Features.Contact.Commands;

using Domain.Factories.Contact;
using MediatR;
using Queries;

public class CreateContactCommand : CreateContactInputModel, IRequest<Result>
{
    public CreateContactCommand(string firstName, string surname, string address, string iban, DateTime dateOfBirth, string phoneNumber) : base(firstName, surname, address, iban, dateOfBirth,  phoneNumber)
    {
        this.FirstName = firstName;
        this.Surname = surname;
        this.Address = address;
        this.IBAN = iban;
        this.DateOfBirth = dateOfBirth;
        this.PhoneNumber = phoneNumber;
    }
    
    
    
    public class CreateContactCommandHandler : IRequestHandler<CreateContactCommand, Result>
    {
        private readonly IContactRepository contactRepository;
        private readonly IContactFactory contactFactory;

        public CreateContactCommandHandler(IContactRepository contactRepository, IContactFactory contactFactory)
        {
            this.contactRepository = contactRepository;
            this.contactFactory = contactFactory;
        }

        public async Task<Result> Handle(
            CreateContactCommand request,
            CancellationToken cancellationToken)
        {
            var contact = this.contactFactory
                .WithName(request.FirstName)
                .WithSurname(request.Surname)
                .WithAddress(request.Address)
                .WithIban(request.IBAN)
                .WithDateOfBirth(request.DateOfBirth)
                .WithPhoneNumber(request.PhoneNumber)
                .Build();

            this.contactRepository.Add(contact);

            return await this.contactRepository.Complete() ? Result.Success : Result.Failure(new List<string>());

        }
    }
}