using System;
using System.Collections.Generic;
using System.Diagnostics;
using DemoAdo.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DemoAdo.Controllers
{
    public class StudentController : Controller
    {
        StudentDataAccessLayer studentDataAccessLayer = null;
        public StudentController()
        {
            studentDataAccessLayer = new StudentDataAccessLayer();
        }

        // GET: Student  
        public IActionResult Index()  
        {
            IEnumerable<Student> students = studentDataAccessLayer.GetAllStudent();
            return View(students);
            //return View();
        }  
  
        // GET: Student/Details/5  
        public IActionResult Details(int id)  
        {  
            return View(studentDataAccessLayer.GetStudentData(id));
        }

        // GET: Student/Create
        public IActionResult Create()  
        {
            return View();
        }  
  
        // POST: Student/Create  
        [HttpPost]  
        [ValidateAntiForgeryToken]  
        public IActionResult Create(Student student)
        {  
            try  
            {
                studentDataAccessLayer.AddStudent(student);
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
            return View(studentDataAccessLayer.GetStudentData(id));
        }  
  
        // POST: Student/Edit/5  
        [HttpPost]  
        [ValidateAntiForgeryToken]  
        public IActionResult Edit(Student student)
        {
            try
            {
                studentDataAccessLayer.UpdateStudent(student);
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
            return View(studentDataAccessLayer.GetStudentData(id));
        }  
  
        // POST: Student/Delete/5  
        [HttpPost]  
        [ValidateAntiForgeryToken]  
        public IActionResult Delete(Student student)
        {  
            try  
            {
                studentDataAccessLayer.DeleteStudent(student.Id);
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