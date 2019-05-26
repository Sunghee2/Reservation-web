package Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class controller {

    @RequestMapping(value = "/")
    public String index(){
        return "index";
    }

//    컨트롤러 분리해야되는데 일단 냅둠
    @RequestMapping(value = "/reservation/new")
    public String reservation_new() {
        return "classrooms/new";
    }
//    @RequestMapping("/form")
//    public String form(Model model){
//        model.addAttribute("user", new Reservation());
//        return "form";
//    }
}