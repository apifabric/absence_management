import { MenuRootItem } from 'ontimize-web-ngx';

import { AttendanceCardComponent } from './Attendance-card/Attendance-card.component';

import { DepartmentCardComponent } from './Department-card/Department-card.component';

import { EmployeeCardComponent } from './Employee-card/Employee-card.component';

import { EmployeeBenefitCardComponent } from './EmployeeBenefit-card/EmployeeBenefit-card.component';

import { EmployeeLocationCardComponent } from './EmployeeLocation-card/EmployeeLocation-card.component';

import { EmployeeProjectCardComponent } from './EmployeeProject-card/EmployeeProject-card.component';

import { EmployeeShiftCardComponent } from './EmployeeShift-card/EmployeeShift-card.component';

import { EmployeeTeamCardComponent } from './EmployeeTeam-card/EmployeeTeam-card.component';

import { EmployeeTrainingCardComponent } from './EmployeeTraining-card/EmployeeTraining-card.component';

import { EquipmentAssignmentCardComponent } from './EquipmentAssignment-card/EquipmentAssignment-card.component';

import { HolidayCardComponent } from './Holiday-card/Holiday-card.component';

import { LeaveBalanceCardComponent } from './LeaveBalance-card/LeaveBalance-card.component';

import { LocationCardComponent } from './Location-card/Location-card.component';

import { OvertimeRecordCardComponent } from './OvertimeRecord-card/OvertimeRecord-card.component';

import { PerformanceReviewCardComponent } from './PerformanceReview-card/PerformanceReview-card.component';

import { ProjectCardComponent } from './Project-card/Project-card.component';

import { ShiftCardComponent } from './Shift-card/Shift-card.component';

import { TeamCardComponent } from './Team-card/Team-card.component';

import { TrainingProgramCardComponent } from './TrainingProgram-card/TrainingProgram-card.component';

import { TravelRecordCardComponent } from './TravelRecord-card/TravelRecord-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Attendance', name: 'ATTENDANCE', icon: 'view_list', route: '/main/Attendance' }
    
        ,{ id: 'Department', name: 'DEPARTMENT', icon: 'view_list', route: '/main/Department' }
    
        ,{ id: 'Employee', name: 'EMPLOYEE', icon: 'view_list', route: '/main/Employee' }
    
        ,{ id: 'EmployeeBenefit', name: 'EMPLOYEEBENEFIT', icon: 'view_list', route: '/main/EmployeeBenefit' }
    
        ,{ id: 'EmployeeLocation', name: 'EMPLOYEELOCATION', icon: 'view_list', route: '/main/EmployeeLocation' }
    
        ,{ id: 'EmployeeProject', name: 'EMPLOYEEPROJECT', icon: 'view_list', route: '/main/EmployeeProject' }
    
        ,{ id: 'EmployeeShift', name: 'EMPLOYEESHIFT', icon: 'view_list', route: '/main/EmployeeShift' }
    
        ,{ id: 'EmployeeTeam', name: 'EMPLOYEETEAM', icon: 'view_list', route: '/main/EmployeeTeam' }
    
        ,{ id: 'EmployeeTraining', name: 'EMPLOYEETRAINING', icon: 'view_list', route: '/main/EmployeeTraining' }
    
        ,{ id: 'EquipmentAssignment', name: 'EQUIPMENTASSIGNMENT', icon: 'view_list', route: '/main/EquipmentAssignment' }
    
        ,{ id: 'Holiday', name: 'HOLIDAY', icon: 'view_list', route: '/main/Holiday' }
    
        ,{ id: 'LeaveBalance', name: 'LEAVEBALANCE', icon: 'view_list', route: '/main/LeaveBalance' }
    
        ,{ id: 'Location', name: 'LOCATION', icon: 'view_list', route: '/main/Location' }
    
        ,{ id: 'OvertimeRecord', name: 'OVERTIMERECORD', icon: 'view_list', route: '/main/OvertimeRecord' }
    
        ,{ id: 'PerformanceReview', name: 'PERFORMANCEREVIEW', icon: 'view_list', route: '/main/PerformanceReview' }
    
        ,{ id: 'Project', name: 'PROJECT', icon: 'view_list', route: '/main/Project' }
    
        ,{ id: 'Shift', name: 'SHIFT', icon: 'view_list', route: '/main/Shift' }
    
        ,{ id: 'Team', name: 'TEAM', icon: 'view_list', route: '/main/Team' }
    
        ,{ id: 'TrainingProgram', name: 'TRAININGPROGRAM', icon: 'view_list', route: '/main/TrainingProgram' }
    
        ,{ id: 'TravelRecord', name: 'TRAVELRECORD', icon: 'view_list', route: '/main/TravelRecord' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AttendanceCardComponent

    ,DepartmentCardComponent

    ,EmployeeCardComponent

    ,EmployeeBenefitCardComponent

    ,EmployeeLocationCardComponent

    ,EmployeeProjectCardComponent

    ,EmployeeShiftCardComponent

    ,EmployeeTeamCardComponent

    ,EmployeeTrainingCardComponent

    ,EquipmentAssignmentCardComponent

    ,HolidayCardComponent

    ,LeaveBalanceCardComponent

    ,LocationCardComponent

    ,OvertimeRecordCardComponent

    ,PerformanceReviewCardComponent

    ,ProjectCardComponent

    ,ShiftCardComponent

    ,TeamCardComponent

    ,TrainingProgramCardComponent

    ,TravelRecordCardComponent

];