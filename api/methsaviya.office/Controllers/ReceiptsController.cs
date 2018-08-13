using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace methsaviya.office.Controllers
{
    public class ReceiptsController:Controller
    {
        [HttpGet("api/receipts")]
        public JsonResult GetReceipts()
        {
            return new JsonResult(new List<object>()
            {
                new { receiptno = "0023", name = "chenuka jayasuriya", amount="2500.00", date="2018-06-24" },
                new { receiptno = "0024", name = "monika damayanthi", amount="2500.00", date="2018-06-25" },
                new { receiptno = "0025", name = "manjula ranasinha", amount="2500.00", date="2018-06-26" }
            });
        }

    }
}
