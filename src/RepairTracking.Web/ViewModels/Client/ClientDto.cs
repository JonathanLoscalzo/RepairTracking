
namespace RepairTracking.Web.ViewModels.Client
{
    public class ClientDto
    {
        public string Id { get; set; }
        
        public string Firstname { get; set; }

        public string Lastname { get; set; }

        public string Email { get; set; }

        public DocumentDto Document { get; set; }

        public AddressDto Address { get; set; }

        public string Cellphone { get; set; }

        public string Telephone { get; set; }

    }
}