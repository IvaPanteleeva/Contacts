namespace Contacts.Application.Behaviours;

using Exceptions;
using FluentValidation;
using MediatR;

public class RequestValidationBehavior<TRequest, TResponse>
    : IPipelineBehavior<TRequest, TResponse>
    where TRequest : IRequest<TResponse>
{
    private readonly IEnumerable<IValidator<TRequest>> validators;

    public RequestValidationBehavior(IEnumerable<IValidator<TRequest>> validators)
        => this.validators = validators;

    public Task<TResponse> Handle(
        TRequest request, 
        CancellationToken cancellationToken, 
        RequestHandlerDelegate<TResponse> next)
    {
        var context = new ValidationContext<object>(request);

        var errors = this
            .validators
            .Select(v => v.Validate(context))
            .SelectMany(result => result.Errors)
            .Where(f => f != null)
            .ToList();

        if (errors.Count != 0)
        {
            throw new ModelValidationException(errors);
        }

        return next();
    }
}