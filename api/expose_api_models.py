from safrs import SAFRSAPI
import safrs
import importlib
import pathlib
import logging as logging

# use absolute path import for easier multi-{app,model,db} support
database = __import__('database')

app_logger = logging.getLogger(__name__)

app_logger.debug("\napi/expose_api_models.py - endpoint for each table")


def expose_models(api, method_decorators = []): 
    """
        Declare API - on existing SAFRSAPI to expose each model - API automation 
        - Including get (filtering, pagination, related data access) 
        - And post/patch/update (including logic enforcement) 

        Invoked at server startup (api_logic_server_run) 

        You typically do not customize this file 
        - See https://apilogicserver.github.io/Docs/Tutorial/#customize-and-debug 
    """
    api.expose_object(database.models.Attendance, method_decorators= method_decorators)
    api.expose_object(database.models.Employee, method_decorators= method_decorators)
    api.expose_object(database.models.Department, method_decorators= method_decorators)
    api.expose_object(database.models.EmployeeBenefit, method_decorators= method_decorators)
    api.expose_object(database.models.EmployeeLocation, method_decorators= method_decorators)
    api.expose_object(database.models.Location, method_decorators= method_decorators)
    api.expose_object(database.models.EmployeeProject, method_decorators= method_decorators)
    api.expose_object(database.models.Project, method_decorators= method_decorators)
    api.expose_object(database.models.EmployeeShift, method_decorators= method_decorators)
    api.expose_object(database.models.Shift, method_decorators= method_decorators)
    api.expose_object(database.models.EmployeeTeam, method_decorators= method_decorators)
    api.expose_object(database.models.Team, method_decorators= method_decorators)
    api.expose_object(database.models.EmployeeTraining, method_decorators= method_decorators)
    api.expose_object(database.models.TrainingProgram, method_decorators= method_decorators)
    api.expose_object(database.models.EquipmentAssignment, method_decorators= method_decorators)
    api.expose_object(database.models.Holiday, method_decorators= method_decorators)
    api.expose_object(database.models.LeaveBalance, method_decorators= method_decorators)
    api.expose_object(database.models.OvertimeRecord, method_decorators= method_decorators)
    api.expose_object(database.models.PerformanceReview, method_decorators= method_decorators)
    api.expose_object(database.models.TravelRecord, method_decorators= method_decorators)
    return api
