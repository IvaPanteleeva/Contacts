namespace Contacts.Infrastructure.Persistence;

using System.Reflection;
using Domain.Models;
using Microsoft.EntityFrameworkCore;

internal class ContactsDbContext : DbContext
{
    public ContactsDbContext(DbContextOptions<ContactsDbContext> options)
        : base(options)
    {
    }
    
    public DbSet<Contact> Contacts { get; set; } = null!;
    
    
    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        base.OnModelCreating(builder);
    }

}   