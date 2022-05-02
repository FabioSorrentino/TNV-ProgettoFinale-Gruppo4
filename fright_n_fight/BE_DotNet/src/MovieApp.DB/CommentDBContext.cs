using Microsoft.EntityFrameworkCore;
using MovieApp.DB.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.DB
{
    public class CommentDBContext : DbContext
    {
#pragma warning disable CS8618 // Il campo non nullable deve contenere un valore non Null all'uscita dal costruttore. Provare a dichiararlo come nullable.
        public DbSet<CommentEntity> MovieComments { get; set; }
#pragma warning restore CS8618 // Il campo non nullable deve contenere un valore non Null all'uscita dal costruttore. Provare a dichiararlo come nullable.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=localhost;Port=3306;Database=movieapp;Uid=root;Pwd= ";
            var mySqlServerVersion = new MySqlServerVersion(new Version(10, 4, 22));

            optionsBuilder.UseMySql(connectionString, mySqlServerVersion);

            base.OnConfiguring(optionsBuilder);
        }
    }
}
