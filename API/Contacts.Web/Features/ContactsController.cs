namespace Contacts.Web.Features;

using Application.Features.Contact.Commands;
using Application.Features.Contact.Queries.Search;
using Microsoft.AspNetCore.Mvc;

public class ContactsController: ApiController
{

    [HttpPost]
    public async Task<ActionResult> Create(CreateContactCommand command)
        => await this.Send(command)!;
    
    [HttpGet]
    public async Task<ActionResult<SearchContactsOutputModel>> Get(
        [FromQuery] SearchContactsQuery query)
        => await this.Send(query)!;
}   