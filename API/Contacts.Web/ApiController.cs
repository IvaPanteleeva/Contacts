namespace Contacts.Web;

using Application;
using Common;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

[ApiController]
[Route("[controller]")]
public abstract class ApiController : ControllerBase
{
    private IMediator? mediator;

    protected IMediator? Mediator
        => this.mediator ??= this.HttpContext
            .RequestServices
            .GetService<IMediator>();

    protected Task<ActionResult<TResult>>? Send<TResult>(IRequest<TResult> request)
        => this.Mediator?.Send(request).ToActionResult();

    protected Task<ActionResult>? Send(IRequest<Result> request)
        => this.Mediator?.Send(request).ToActionResult();

    protected Task<ActionResult<TResult>>? Send<TResult>(IRequest<Result<TResult>> request)
        => this.Mediator?.Send(request).ToActionResult();
}