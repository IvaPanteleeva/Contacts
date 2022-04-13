namespace Contacts.Infrastructure;

using Application.Contracts;
using Application.Features.Contact.Queries;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistence;
using Persistence.Repositories;

public static class InfrastructureConfiguration
{

    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services,
        IConfiguration configuration)
        => services
            .AddDatabase(configuration)
            .AddRepositories()
            .AddTransient<IContactRepository, ContactRepository>()
    ;

    private static IServiceCollection AddDatabase(
        this IServiceCollection services,
        IConfiguration configuration)
        => services
            .AddDbContext<ContactsDbContext>(options => options
                .UseSqlite(
                    configuration.GetConnectionString("DefaultConnection"),
                    b => b.MigrationsAssembly(typeof(ContactsDbContext)
                        .Assembly.FullName)))
            .AddTransient<IInitializer, ContactsDbInitializer>();

    private static IServiceCollection AddRepositories(this IServiceCollection services)
        => services
            .Scan(scan => scan
                .FromCallingAssembly()
                .AddClasses(classes => classes
                    .AssignableTo(typeof(IRepository<>)))
                .AsMatchingInterface()
                .WithTransientLifetime());

    
}