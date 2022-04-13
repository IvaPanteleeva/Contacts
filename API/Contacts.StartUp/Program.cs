using Contacts.Application;
using Contacts.Domain;
using Contacts.Infrastructure;
using Contacts.Web;
using Contacts.Web.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddInfrastructure(builder.Configuration);
builder.Services.AddApplication(builder.Configuration);
builder.Services.AddDomain();
builder.Services.AddWebComponents();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();




var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseValidationExceptionHandler();

app.UseCors(x =>
    x.AllowAnyMethod().AllowCredentials().AllowAnyHeader().AllowCredentials()
        .WithOrigins("http://localhost:4200"));

app.UseAuthorization();

app.MapControllers();

app.Run();