using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace methsaviya.office.Controllers
{
    public class MembersController:Controller
    {
        [HttpGet("api/members")]
        [EnableCors("MsCorsPolicy")]
        public JsonResult GetMembers()
        {
            return new JsonResult(new List<object>
            {
                new { memberno="30-4536",name="S.A Kithsiri Dhammappiya Samaraweera",membersince="2016-2-27"},
                new { memberno="30-4537",name="W.K. Vibhadya Nirmani",membersince="2016-2-27"},
                new { memberno="30-4538",name="S.W.A Prasad Samarasinghe",membersince="2016-2-27"},
                new { memberno="30-4539",name="G. Champa Nernjala Perera",membersince="2016-2-27"},
                new { memberno="30-4540",name="A.M. Renuka Pushpakumari",membersince="2016-2-27"},
                new { memberno="30-4541",name="M.W.A Siripala",membersince="2016-2-27"},
                new { memberno="30-4535",name="W. Sarath Silva",membersince="2016-2-27"}
            });
        }
    }
}
