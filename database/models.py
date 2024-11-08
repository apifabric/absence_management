# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 08, 2024 05:50:08
# Database: sqlite:////tmp/tmp.9yAEHYB1v7/absence_management/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class AbsenceType(SAFRSBaseX, Base):
    """
    description: Defines different absence types, like sick leave, vacation, etc.
    """
    __tablename__ = 'absence_types'
    _s_collection_name = 'AbsenceType'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    type_name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    AbsenceRecordList : Mapped[List["AbsenceRecord"]] = relationship(back_populates="absence_type")



class Department(SAFRSBaseX, Base):
    """
    description: Represents a department within the organization.
    """
    __tablename__ = 'departments'
    _s_collection_name = 'Department'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    TeamList : Mapped[List["Team"]] = relationship(back_populates="department")



class Employee(SAFRSBaseX, Base):
    """
    description: Represents an employee in the organization.
    """
    __tablename__ = 'employees'
    _s_collection_name = 'Employee'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)
    hire_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    AbsenceRecordList : Mapped[List["AbsenceRecord"]] = relationship(back_populates="employee")
    AttendanceList : Mapped[List["Attendance"]] = relationship(back_populates="employee")
    EmployeeBenefitList : Mapped[List["EmployeeBenefit"]] = relationship(back_populates="employee")
    EmployeeLocationList : Mapped[List["EmployeeLocation"]] = relationship(back_populates="employee")
    EmployeeProjectList : Mapped[List["EmployeeProject"]] = relationship(back_populates="employee")
    EmployeeShiftList : Mapped[List["EmployeeShift"]] = relationship(back_populates="employee")
    EmployeeTrainingList : Mapped[List["EmployeeTraining"]] = relationship(back_populates="employee")
    EquipmentAssignmentList : Mapped[List["EquipmentAssignment"]] = relationship(back_populates="employee")
    LeaveBalanceList : Mapped[List["LeaveBalance"]] = relationship(back_populates="employee")
    OvertimeRecordList : Mapped[List["OvertimeRecord"]] = relationship(back_populates="employee")
    PerformanceReviewList : Mapped[List["PerformanceReview"]] = relationship(back_populates="employee")
    TravelRecordList : Mapped[List["TravelRecord"]] = relationship(back_populates="employee")
    EmployeeTeamList : Mapped[List["EmployeeTeam"]] = relationship(back_populates="employee")



class Holiday(SAFRSBaseX, Base):
    """
    description: Represents holidays that may affect absence records.
    """
    __tablename__ = 'holidays'
    _s_collection_name = 'Holiday'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    date = Column(DateTime, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)



class Location(SAFRSBaseX, Base):
    """
    description: Represents a location where an employee is based or works.
    """
    __tablename__ = 'locations'
    _s_collection_name = 'Location'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    address = Column(Text)

    # parent relationships (access parent)

    # child relationships (access children)
    EmployeeLocationList : Mapped[List["EmployeeLocation"]] = relationship(back_populates="location")



class Project(SAFRSBaseX, Base):
    """
    description: Represents a project that employees can be assigned to.
    """
    __tablename__ = 'projects'
    _s_collection_name = 'Project'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    deadline = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    EmployeeProjectList : Mapped[List["EmployeeProject"]] = relationship(back_populates="project")



class Shift(SAFRSBaseX, Base):
    """
    description: Represents different work shifts.
    """
    __tablename__ = 'shifts'
    _s_collection_name = 'Shift'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    shift_name = Column(String, nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    EmployeeShiftList : Mapped[List["EmployeeShift"]] = relationship(back_populates="shift")



class TrainingProgram(SAFRSBaseX, Base):
    """
    description: Represents a training program available to employees.
    """
    __tablename__ = 'training_programs'
    _s_collection_name = 'TrainingProgram'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(Text)

    # parent relationships (access parent)

    # child relationships (access children)
    EmployeeTrainingList : Mapped[List["EmployeeTraining"]] = relationship(back_populates="training_program")



class AbsenceRecord(SAFRSBaseX, Base):
    """
    description: Records individual instances of employee absences.
    """
    __tablename__ = 'absence_records'
    _s_collection_name = 'AbsenceRecord'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    absence_type_id = Column(ForeignKey('absence_types.id'), nullable=False)
    start_date = Column(DateTime)
    end_date = Column(DateTime)

    # parent relationships (access parent)
    absence_type : Mapped["AbsenceType"] = relationship(back_populates=("AbsenceRecordList"))
    employee : Mapped["Employee"] = relationship(back_populates=("AbsenceRecordList"))

    # child relationships (access children)



class Attendance(SAFRSBaseX, Base):
    """
    description: Tracks daily attendance of employees.
    """
    __tablename__ = 'attendances'
    _s_collection_name = 'Attendance'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    date = Column(DateTime)
    status = Column(String, nullable=False)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("AttendanceList"))

    # child relationships (access children)



class EmployeeBenefit(SAFRSBaseX, Base):
    """
    description: Stores benefits information for each employee.
    """
    __tablename__ = 'employee_benefits'
    _s_collection_name = 'EmployeeBenefit'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    benefit_type = Column(String, nullable=False)
    description = Column(Text)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("EmployeeBenefitList"))

    # child relationships (access children)



class EmployeeLocation(SAFRSBaseX, Base):
    """
    description: Junction table managing employee location assignments.
    """
    __tablename__ = 'employee_locations'
    _s_collection_name = 'EmployeeLocation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    location_id = Column(ForeignKey('locations.id'), nullable=False)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("EmployeeLocationList"))
    location : Mapped["Location"] = relationship(back_populates=("EmployeeLocationList"))

    # child relationships (access children)



class EmployeeProject(SAFRSBaseX, Base):
    """
    description: Junction table to manage assignment of employees to projects.
    """
    __tablename__ = 'employee_projects'
    _s_collection_name = 'EmployeeProject'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    project_id = Column(ForeignKey('projects.id'), nullable=False)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("EmployeeProjectList"))
    project : Mapped["Project"] = relationship(back_populates=("EmployeeProjectList"))

    # child relationships (access children)



class EmployeeShift(SAFRSBaseX, Base):
    """
    description: Junction table for assigning employees to shifts.
    """
    __tablename__ = 'employee_shifts'
    _s_collection_name = 'EmployeeShift'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    shift_id = Column(ForeignKey('shifts.id'), nullable=False)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("EmployeeShiftList"))
    shift : Mapped["Shift"] = relationship(back_populates=("EmployeeShiftList"))

    # child relationships (access children)



class EmployeeTraining(SAFRSBaseX, Base):
    """
    description: Junction table for managing employee enrollments in training programs.
    """
    __tablename__ = 'employee_trainings'
    _s_collection_name = 'EmployeeTraining'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    training_program_id = Column(ForeignKey('training_programs.id'), nullable=False)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("EmployeeTrainingList"))
    training_program : Mapped["TrainingProgram"] = relationship(back_populates=("EmployeeTrainingList"))

    # child relationships (access children)



class EquipmentAssignment(SAFRSBaseX, Base):
    """
    description: Tracks equipment assigned to employees.
    """
    __tablename__ = 'equipment_assignments'
    _s_collection_name = 'EquipmentAssignment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    equipment_name = Column(String, nullable=False)
    assignment_date = Column(DateTime)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("EquipmentAssignmentList"))

    # child relationships (access children)



class LeaveBalance(SAFRSBaseX, Base):
    """
    description: Tracks the leave balance for each employee.
    """
    __tablename__ = 'leave_balances'
    _s_collection_name = 'LeaveBalance'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    sick_leave = Column(Float)
    vacation_leave = Column(Float)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("LeaveBalanceList"))

    # child relationships (access children)



class OvertimeRecord(SAFRSBaseX, Base):
    """
    description: Records details of employee overtime work.
    """
    __tablename__ = 'overtime_records'
    _s_collection_name = 'OvertimeRecord'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    date = Column(DateTime, nullable=False)
    hours = Column(Float)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("OvertimeRecordList"))

    # child relationships (access children)



class PerformanceReview(SAFRSBaseX, Base):
    """
    description: Stores records of employee performance reviews.
    """
    __tablename__ = 'performance_reviews'
    _s_collection_name = 'PerformanceReview'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    review_date = Column(DateTime)
    score = Column(Float)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("PerformanceReviewList"))

    # child relationships (access children)



class Team(SAFRSBaseX, Base):
    """
    description: Represents a team within a department.
    """
    __tablename__ = 'teams'
    _s_collection_name = 'Team'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    department_id = Column(ForeignKey('departments.id'), nullable=False)

    # parent relationships (access parent)
    department : Mapped["Department"] = relationship(back_populates=("TeamList"))

    # child relationships (access children)
    EmployeeTeamList : Mapped[List["EmployeeTeam"]] = relationship(back_populates="team")



class TravelRecord(SAFRSBaseX, Base):
    """
    description: Tracks employee travel activities.
    """
    __tablename__ = 'travel_records'
    _s_collection_name = 'TravelRecord'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    destination = Column(String, nullable=False)
    travel_date = Column(DateTime)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("TravelRecordList"))

    # child relationships (access children)



class EmployeeTeam(SAFRSBaseX, Base):
    """
    description: Junction table managing the association of employees to teams.
    """
    __tablename__ = 'employee_teams'
    _s_collection_name = 'EmployeeTeam'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employees.id'), nullable=False)
    team_id = Column(ForeignKey('teams.id'), nullable=False)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("EmployeeTeamList"))
    team : Mapped["Team"] = relationship(back_populates=("EmployeeTeamList"))

    # child relationships (access children)
