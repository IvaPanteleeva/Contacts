namespace Contacts.Infrastructure.Persistence;

using Microsoft.EntityFrameworkCore;

internal class ContactsDbInitializer : IInitializer
{
    private readonly ContactsDbContext db;

    public ContactsDbInitializer(ContactsDbContext db) => this.db = db;

    public void Initialize() => this.db.Database.Migrate();
}