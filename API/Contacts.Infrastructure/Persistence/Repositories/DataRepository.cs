namespace Contacts.Infrastructure.Persistence.Repositories;

using Application.Contracts;
using Domain.Common;

internal class DataRepository<TEntity> : IRepository<TEntity>
    where TEntity : Entity<int>, IAggregateRoot
{
    private readonly ContactsDbContext db;

    public DataRepository(ContactsDbContext db) => this.db = db;

    public IQueryable<TEntity> All() => this.db.Set<TEntity>();

    public Task<int> SaveChanges(CancellationToken cancellationToken = default)
        => this.db.SaveChangesAsync(cancellationToken);

    public TEntity? FindById(int id) => this.db.Set<TEntity>().FirstOrDefault(x => x.Id == id);
    
    public void Add(TEntity entity)
    {
        this.db.Add(entity);
    }
    
    public async Task<bool> Complete() => await this.db.SaveChangesAsync() > 0;
}