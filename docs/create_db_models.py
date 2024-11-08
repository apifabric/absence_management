# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey, Text, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

Base = declarative_base()

class Employee(Base):
    """description: Represents an employee in the organization."""
    __tablename__ = 'employees'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    hire_date = Column(DateTime, default=datetime.utcnow)

class Department(Base):
    """description: Represents a department within the organization."""
    __tablename__ = 'departments'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)

class AbsenceType(Base):
    """description: Defines different absence types, like sick leave, vacation, etc."""
    __tablename__ = 'absence_types'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    type_name = Column(String, nullable=False)

class AbsenceRecord(Base):
    """description: Records individual instances of employee absences."""
    __tablename__ = 'absence_records'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employees.id'), nullable=False)
    absence_type_id = Column(Integer, ForeignKey('absence_types.id'), nullable=False)
    start_date = Column(DateTime, default=datetime.utcnow)
    end_date = Column(DateTime)

class Project(Base):
    """description: Represents a project that employees can be assigned to."""
    __tablename__ = 'projects'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    deadline = Column(DateTime)

class EmployeeProject(Base):
    """description: Junction table to manage assignment of employees to projects."""
    __tablename__ = 'employee_projects'

    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employees.id'), nullable=False)
    project_id = Column(Integer, ForeignKey('projects.id'), nullable=False)

class LeaveBalance(Base):
    """description: Tracks the leave balance for each employee."""
    __tablename__ = 'leave_balances'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employees.id'), nullable=False)
    sick_leave = Column(Float, default=0)
    vacation_leave = Column(Float, default=0)

class Team(Base):
    """description: Represents a team within a department."""
    __tablename__ = 'teams'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    department_id = Column(Integer, ForeignKey('departments.id'), nullable=False)

class EmployeeTeam(Base):
    """description: Junction table managing the association of employees to teams."""
    __tablename__ = 'employee_teams'

    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employees.id'), nullable=False)
    team_id = Column(Integer, ForeignKey('teams.id'), nullable=False)

class Location(Base):
    """description: Represents a location where an employee is based or works."""
    __tablename__ = 'locations'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    address = Column(Text)

class EmployeeLocation(Base):
    """description: Junction table managing employee location assignments."""
    __tablename__ = 'employee_locations'

    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employees.id'), nullable=False)
    location_id = Column(Integer, ForeignKey('locations.id'), nullable=False)

class PerformanceReview(Base):
    """description: Stores records of employee performance reviews."""
    __tablename__ = 'performance_reviews'

    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employees.id'), nullable=False)
    review_date = Column(DateTime, default=datetime.utcnow)
    score = Column(Float)

class OvertimeRecord(Base):
    """description: Records details of employee overtime work."""
    __tablename__ = 'overtime_records'

    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employees.id'), nullable=False)
    date = Column(DateTime, nullable=False)
    hours = Column(Float, default=0)

class Shift(Base):
    """description: Represents different work shifts."""
    __tablename__ = 'shifts'

    id = Column(Integer, primary_key=True, autoincrement=True)
    shift_name = Column(String, nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=False)

class EmployeeShift(Base):
    """description: Junction table for assigning employees to shifts."""
    __tablename__ = 'employee_shifts'

    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employees.id'), nullable=False)
    shift_id = Column(Integer, ForeignKey('shifts.id'), nullable=False)

class Attendance(Base):
    """description: Tracks daily attendance of employees."""
    __tablename__ = 'attendances'

    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employees.id'), nullable=False)
    date = Column(DateTime, default=datetime.utcnow)
    status = Column(String, nullable=False)

class TrainingProgram(Base):
    """description: Represents a training program available to employees."""
    __tablename__ = 'training_programs'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(Text)

class EmployeeTraining(Base):
    """description: Junction table for managing employee enrollments in training programs."""
    __tablename__ = 'employee_trainings'

    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employees.id'), nullable=False)
    training_program_id = Column(Integer, ForeignKey('training_programs.id'), nullable=False)

class Holiday(Base):
    """description: Represents holidays that may affect absence records."""
    __tablename__ = 'holidays'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    date = Column(DateTime, nullable=False)

class EmployeeBenefit(Base):
    """description: Stores benefits information for each employee."""
    __tablename__ = 'employee_benefits'

    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employees.id'), nullable=False)
    benefit_type = Column(String, nullable=False)
    description = Column(Text, nullable=True)

class TravelRecord(Base):
    """description: Tracks employee travel activities."""
    __tablename__ = 'travel_records'

    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employees.id'), nullable=False)
    destination = Column(String, nullable=False)
    travel_date = Column(DateTime, default=datetime.utcnow)

class EquipmentAssignment(Base):
    """description: Tracks equipment assigned to employees."""
    __tablename__ = 'equipment_assignments'

    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employees.id'), nullable=False)
    equipment_name = Column(String, nullable=False)
    assignment_date = Column(DateTime, default=datetime.utcnow)

# Initialize database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite', echo=False)
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# Sample data entry
employee = Employee(first_name='John', last_name='Doe', email='john.doe@example.com')
department = Department(name='Human Resources')
absence_type = AbsenceType(type_name='Sick Leave')
absence_record = AbsenceRecord(employee_id=1, absence_type_id=1, start_date=datetime(2023, 10, 1), end_date=datetime(2023, 10, 10))
project = Project(name='Project Alpha', deadline=datetime(2024, 2, 15))
employee_project = EmployeeProject(employee_id=1, project_id=1)
leave_balance = LeaveBalance(employee_id=1, sick_leave=5, vacation_leave=10)
team = Team(name='Recruitment', department_id=1)
employee_team = EmployeeTeam(employee_id=1, team_id=1)
location = Location(name='New York Office', address='123 Main St, New York, NY')
employee_location = EmployeeLocation(employee_id=1, location_id=1)
performance_review = PerformanceReview(employee_id=1, score=4.5)
overtime_record = OvertimeRecord(employee_id=1, date=datetime(2023, 10, 11), hours=2)
shift = Shift(shift_name='Morning Shift', start_time=datetime(2023, 1, 1, 8, 0), end_time=datetime(2023, 1, 1, 16, 0))
employee_shift = EmployeeShift(employee_id=1, shift_id=1)
attendance = Attendance(employee_id=1, status='Present')
training_program = TrainingProgram(name='Leadership Training', description='Develop leadership skills.')
employee_training = EmployeeTraining(employee_id=1, training_program_id=1)
holiday = Holiday(name='New Year\'s Day', date=datetime(2023, 1, 1))
employee_benefit = EmployeeBenefit(employee_id=1, benefit_type='Health Insurance', description='Comprehensive health insurance plan.')
travel_record = TravelRecord(employee_id=1, destination='San Francisco', travel_date=datetime(2023, 10, 15))
equipment_assignment = EquipmentAssignment(employee_id=1, equipment_name='Laptop', assignment_date=datetime(2023, 10, 1))

session.add_all([
    employee, department, absence_type, absence_record, project, employee_project,
    leave_balance, team, employee_team, location, employee_location, performance_review,
    overtime_record, shift, employee_shift, attendance, training_program, employee_training,
    holiday, employee_benefit, travel_record, equipment_assignment
])

session.commit()
session.close()
