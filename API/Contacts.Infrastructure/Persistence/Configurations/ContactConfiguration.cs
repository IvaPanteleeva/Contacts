namespace Contacts.Infrastructure.Persistence.Configurations;

using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using static Domain.ModelConstraints.Common;

public class ContactConfiguration: IEntityTypeConfiguration<Contact>
{
    public void Configure(EntityTypeBuilder<Contact> builder)
    {
        builder
            .HasKey(d => d.Id);
        
        builder
            .Property(d => d.FirstName)
            .IsRequired()
            .HasMaxLength(MaxNameLength);
        
        builder
            .Property(d => d.Surname)
            .IsRequired()
            .HasMaxLength(MaxNameLength);
        
        builder
            .Property(d => d.Address)
            .IsRequired();
        
        builder
            .Property(d => d.DateOfBirth)
            .IsRequired();
        
        builder
            .Property(d => d.IBAN)
            .IsRequired();
        
        builder
            .OwnsOne(
                d => d.PhoneNumber,
                p =>
                {
                    p.WithOwner();

                    p.Property(pn => pn.Number);
                });
    }
}