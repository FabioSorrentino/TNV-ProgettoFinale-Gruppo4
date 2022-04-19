using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApp.Core.Exceptions
{
    public class NegativeFieldException : Exception
    {
        public NegativeFieldException(string field, int fieldId) : base($"Il valore {fieldId} inserito per il campo {field} deve essere maggiore di 0!")
        {
        }
    }
}
