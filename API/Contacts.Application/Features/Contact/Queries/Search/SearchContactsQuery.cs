namespace Contacts.Application.Features.Contact.Queries.Search;

using MediatR;

public class SearchContactsQuery: IRequest<SearchContactsOutputModel>
{
    public string? FirstName { get; set; }
    
    public class SearchContactsQueryHandler : IRequestHandler<SearchContactsQuery, SearchContactsOutputModel>
    {
        private readonly IContactRepository contactRepository;

        public SearchContactsQueryHandler(IContactRepository contactRepository)
            => this.contactRepository = contactRepository;

        public async Task<SearchContactsOutputModel> Handle(
            SearchContactsQuery request,
            CancellationToken cancellationToken)
        {
            var contactListings = await this.contactRepository.GetContactsListings(
                request.FirstName, 
                cancellationToken);

            var totalCarAds = await this.contactRepository.Total(cancellationToken);

            return new SearchContactsOutputModel(contactListings, totalCarAds);
        }
    }
}