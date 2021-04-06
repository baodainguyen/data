using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DemoAdo.Models;
using Microsoft.AspNetCore.Http;

namespace DemoAdo.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        // GET: Student
        public IActionResult Index()
        {
            return View();
        }
        // GET: Student/Details/5  
        public IActionResult Details(int id)  
        {  
            return View();  
        }
        // GET: Student/Create  
        public IActionResult Create()  
        {  
            return View();  
        }
        // POST: Student/Create  
        [HttpPost]  
        [ValidateAntiForgeryToken]  
        public IActionResult Create(IFormCollection collection)  
        {  
            try  
            {  
                // TODO: Add insert logic here  
  
                return RedirectToAction(nameof(Index));  
            }  
            catch  
            {  
                return View();  
            }  
        }
        // GET: Student/Edit/5  
        public IActionResult Edit(int id)  
        {  
            return View();  
        }
        // POST: Student/Edit/5  
        [HttpPost]  
        [ValidateAntiForgeryToken]  
        public IActionResult Edit(int id, IFormCollection collection)  
        {  
            try  
            {  
                // TODO: Add update logic here  
  
                return RedirectToAction(nameof(Index));  
            }  
            catch  
            {  
                return View();  
            }  
        }
        // GET: Student/Delete/5  
        public IActionResult Delete(int id)  
        {  
            return View();  
        }
        // POST: Student/Delete/5  
        [HttpPost]  
        [ValidateAntiForgeryToken]  
        public IActionResult Delete(int id, IFormCollection collection)  
        {  
            try  
            {  
                // TODO: Add delete logic here  
  
                return RedirectToAction(nameof(Index));  
            }  
            catch  
            {  
                return View();  
            }  
        }


        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
