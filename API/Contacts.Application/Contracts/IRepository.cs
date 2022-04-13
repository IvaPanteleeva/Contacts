namespace Contacts.Application.Contracts;

using Domain.Common;

// aggregate roots only
public interface IRepository<TEntity>
    where TEntity : IAggregateRoot
{
    IQueryable<TEntity> All();

    Task<int> SaveChanges(CancellationToken cancellationToken = default);
    
    TEntity? FindById(int id);
    
    void Add(TEntity entity);
    
    Task<bool> Complete();
}