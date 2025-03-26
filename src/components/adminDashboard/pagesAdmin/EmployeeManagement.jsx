import React, { useState } from 'react';
import { FaSearch, FaUserPlus, FaEdit, FaTrash, FaLock, FaUnlock, FaIdCard, FaEnvelope, FaPhone, FaUserShield, FaUserTie, FaUser, FaMoneyBillWave, FaHandHoldingUsd, FaShieldAlt, FaChartBar, FaHistory, FaFileAlt } from 'react-icons/fa';
import './EmployeeManagement.css';

export default function EmployeeManagement() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const [showPermissionsModal, setShowPermissionsModal] = useState(false);
  const [showActivityLogs, setShowActivityLogs] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Teller',
    department: 'Branch Operations'
  });

  const roles = [
    { value: 'Teller', icon: <FaMoneyBillWave />, color: 'blue' },
    { value: 'Loan Officer', icon: <FaHandHoldingUsd />, color: 'green' },
    { value: 'Account Manager', icon: <FaUserTie />, color: 'purple' },
    { value: 'Security Officer', icon: <FaShieldAlt />, color: 'red' }
  ];

  const departments = [
    'Branch Operations', 
    'Loan Department', 
    'Customer Service', 
    'IT', 
    'Security',
    'Finance'
  ];

  const employees = [
    {
      id: 'EMP1001',
      name: 'Alex Johnson',
      email: 'alex.johnson@bank.com',
      phone: '+1 (555) 123-7890',
      status: 'Active',
      role: 'Security Officer',
      department: 'IT',
      hireDate: '2022-01-15',
      lastLogin: '2023-08-22 14:30',
      permissions: ["security_monitoring"],
      activityLogs: [
        { action: 'Login', timestamp: '2023-08-22 14:30', ip: '192.168.1.5' },
        { action: 'Modified interest rates', timestamp: '2023-08-22 14:35', details: 'Changed savings rate to 3.5%' },
        { action: 'Approved loan', timestamp: '2023-08-22 14:50', details: 'Loan #L-20394 ($25,000)' }
      ]
    },
    {
      id: 'EMP1002',
      name: 'Maria Garcia',
      email: 'maria.garcia@bank.com',
      phone: '+1 (555) 456-1234',
      status: 'Active',
      role: 'Teller',
      department: 'Branch Operations',
      hireDate: '2021-11-05',
      lastLogin: '2023-08-21 09:15',
      permissions: ['process_transactions', 'view_customer_info'],
      activityLogs: [
        { action: 'Login', timestamp: '2023-08-21 09:15', ip: '192.168.1.12' },
        { action: 'Processed deposit', timestamp: '2023-08-21 09:30', details: '$1,200 for account ****4567' },
        { action: 'Processed withdrawal', timestamp: '2023-08-21 10:45', details: '$500 for account ****2345' }
      ]
    },
    {
      id: 'EMP1003',
      name: 'James Wilson',
      email: 'james.wilson@bank.com',
      phone: '+1 (555) 789-4567',
      status: 'Inactive',
      role: 'Loan Officer',
      department: 'Loan Department',
      hireDate: '2023-03-10',
      lastLogin: '2023-07-15 11:20',
      permissions: ['approve_loans', 'view_credit_reports'],
      activityLogs: [
        { action: 'Login', timestamp: '2023-07-15 11:20', ip: '192.168.1.8' },
        { action: 'Approved loan', timestamp: '2023-07-15 11:45', details: 'Loan #L-19876 ($15,000)' },
        { action: 'Rejected loan', timestamp: '2023-07-15 13:30', details: 'Loan #L-19877 ($30,000)' }
      ]
    }
  ];

  const permissionsList = [
    { id: 'all_access', label: 'Full System Access', description: 'Complete control over all functions' },
    { id: 'process_transactions', label: 'Process Transactions', description: 'Deposits, withdrawals, transfers' },
    { id: 'approve_loans', label: 'Approve Loans', description: 'Approve/reject loan applications' },
    { id: 'modify_accounts', label: 'Modify Accounts', description: 'Create/update customer accounts' },
    { id: 'view_reports', label: 'View Reports', description: 'Access financial and operational reports' },
    { id: 'manage_employees', label: 'Manage Employees', description: 'Add/edit employee records' },
    { id: 'security_monitoring', label: 'Security Monitoring', description: 'View security alerts and logs' },
    { id: 'interest_rate_changes', label: 'Change Interest Rates', description: 'Modify account interest rates' }
  ];

  const generateEmployeeId = () => {
    return `EMP${Math.floor(1000 + Math.random() * 9000)}`;
  };

  const handleAddEmployee = () => {
    const newEmp = {
      ...newEmployee,
      id: generateEmployeeId(),
      status: 'Active',
      hireDate: new Date().toISOString().split('T')[0],
      lastLogin: 'Never',
      permissions: [],
      activityLogs: []
    };
    employees.push(newEmp);
    setShowAddEmployeeModal(false);
    setNewEmployee({
      name: '',
      email: '',
      phone: '',
      role: 'Teller',
      department: 'Branch Operations'
    });
  };

  return (
    <div className="employee-management">
      <header className="employee-header">
        <h1>Employee Management</h1>
        <div className="employee-controls">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search employees..." />
          </div>
          <div className="control-buttons">
            <button className="add-employee-btn" onClick={() => setShowAddEmployeeModal(true)}>
              <FaUserPlus /> Add Employee
            </button>
            <button className="report-btn" onClick={() => setShowActivityLogs(!showActivityLogs)}>
              <FaChartBar /> {showActivityLogs ? 'Hide' : 'Show'} Reports
            </button>
          </div>
        </div>
      </header>

      <div className="employee-table-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Department</th>
              <th>Status</th>
              <th>Last Login</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr 
                key={employee.id}
                className={`employee-row ${selectedEmployee?.id === employee.id ? 'selected' : ''}`}
                onClick={() => setSelectedEmployee(employee)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <td>{employee.id}</td>
                <td>
                  <div className="employee-name">
                    {employee.name}
                    <div className="employee-contact">
                      <span><FaEnvelope /> {employee.email}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`role-badge ${employee.role.toLowerCase().replace(' ', '-')}`}>
                    {roles.find(r => r.value === employee.role)?.icon}
                    {employee.role}
                  </span>
                </td>
                <td>
                  <span className="department-badge">
                    {employee.department}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${employee.status.toLowerCase()}`}>
                    {employee.status}
                  </span>
                </td>
                <td>
                  {employee.lastLogin}
                </td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <FaEdit />
                  </button>
                  <button className="delete-btn" title="Delete">
                    <FaTrash />
                  </button>
                  {employee.status === 'Active' ? (
                    <button className="disable-btn" title="Disable">
                      <FaLock />
                    </button>
                  ) : (
                    <button className="enable-btn" title="Enable">
                      <FaUnlock />
                    </button>
                  )}
                  <button 
                    className="permissions-btn" 
                    title="Permissions"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedEmployee(employee);
                      setShowPermissionsModal(true);
                    }}
                  >
                    <FaUserShield />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`employee-detail-panel ${selectedEmployee ? 'visible' : ''}`}>
        {selectedEmployee && (
          <>
            <div className="panel-header">
              <h2>Employee Details</h2>
              <div className="employee-id">
                <FaIdCard /> {selectedEmployee.id}
              </div>
            </div>
            
            <div className="detail-sections">
              <section className="personal-info">
                <div className="info-grid">
                  <div className="info-item">
                    <label>Name</label>
                    <p>{selectedEmployee.name}</p>
                  </div>
                  <div className="info-item">
                    <label>Phone</label>
                    <p><FaPhone /> {selectedEmployee.phone}</p>
                  </div>
                  <div className="info-item">
                    <label>Email</label>
                    <p><FaEnvelope /> {selectedEmployee.email}</p>
                  </div>
                  <div className="info-item">
                    <label>Hire Date</label>
                    <p>{selectedEmployee.hireDate}</p>
                  </div>
                  <div className="info-item">
                    <label>Status</label>
                    <p>
                      <span className={`status-badge ${selectedEmployee.status.toLowerCase()}`}>
                        {selectedEmployee.status}
                      </span>
                    </p>
                  </div>
                  <div className="info-item">
                    <label>Role</label>
                    <p>
                      <span className={`role-badge ${selectedEmployee.role.toLowerCase().replace(' ', '-')}`}>
                        {selectedEmployee.role}
                      </span>
                    </p>
                  </div>
                  <div className="info-item">
                    <label>Department</label>
                    <p>
                      <span className="department-badge">
                        {selectedEmployee.department}
                      </span>
                    </p>
                  </div>
                  <div className="info-item">
                    <label>Last Login</label>
                    <p>{selectedEmployee.lastLogin}</p>
                  </div>
                </div>
              </section>

              <section className="access-info">
                <h3>Access & Permissions</h3>
                <div className="access-card">
                  <h4>Current Permissions</h4>
                  {selectedEmployee.permissions.length > 0 ? (
                    <ul className="permissions-list">
                      {selectedEmployee.permissions.map(permId => {
                        const perm = permissionsList.find(p => p.id === permId);
                        return perm ? <li key={perm.id}>{perm.label}</li> : null;
                      })}
                    </ul>
                  ) : (
                    <p>No special permissions assigned</p>
                  )}
                </div>
              </section>

              {showActivityLogs && (
                <section className="activity-info">
                  <h3>Activity Logs</h3>
                  <div className="activity-card">
                    <h4>Recent Actions</h4>
                    {selectedEmployee.activityLogs.length > 0 ? (
                      <ul className="activity-list">
                        {selectedEmployee.activityLogs.map((log, index) => (
                          <li key={index}>
                            <span className="log-timestamp">{log.timestamp}</span>
                            <span className="log-action">{log.action}</span>
                            {log.details && <span className="log-details">{log.details}</span>}
                            {log.ip && <span className="log-ip">IP: {log.ip}</span>}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No activity recorded</p>
                    )}
                  </div>
                </section>
              )}
            </div>

            <div className="panel-actions">
              <button className="save-btn">Save Changes</button>
              <button className="reset-btn">Reset Password</button>
              <button 
                className="permissions-btn"
                onClick={() => setShowPermissionsModal(true)}
              >
                Manage Permissions
              </button>
              <button className="report-btn" onClick={() => setShowActivityLogs(!showActivityLogs)}>
                <FaFileAlt /> {showActivityLogs ? 'Hide' : 'Show'} Activity Logs
              </button>
            </div>
          </>
        )}
      </div>

      {/* Add Employee Modal */}
      {showAddEmployeeModal && (
        <div className="modal-overlay-emp">
          <div className="modal-content-emp">
            <h2>Add New Employee</h2>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                value={newEmployee.name}
                onChange={(e) => setNewEmployee({...newEmployee, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                value={newEmployee.email}
                onChange={(e) => setNewEmployee({...newEmployee, email: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input 
                type="tel" 
                value={newEmployee.phone}
                onChange={(e) => setNewEmployee({...newEmployee, phone: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Role</label>
              <select
                value={newEmployee.role}
                onChange={(e) => setNewEmployee({...newEmployee, role: e.target.value})}
              >
                {roles.map(role => (
                  <option key={role.value} value={role.value}>{role.value}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Department</label>
              <select
                value={newEmployee.department}
                onChange={(e) => setNewEmployee({...newEmployee, department: e.target.value})}
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setShowAddEmployeeModal(false)}>
                Cancel
              </button>
              <button className="save-btn" onClick={handleAddEmployee}>
                Add Employee
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Permissions Modal */}
      {showPermissionsModal && selectedEmployee && (
        <div className="modal-overlay">
          <div className="modal-content permissions-modal">
            <h2>Manage Permissions for {selectedEmployee.name}</h2>
            <p className="employee-role">Role: {selectedEmployee.role}</p>
            
            <div className="permissions-grid">
              {permissionsList.map(permission => (
                <div key={permission.id} className="permission-item">
                  <label>
                    <input 
                      type="checkbox"
                      checked={selectedEmployee.permissions.includes(permission.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          selectedEmployee.permissions.push(permission.id);
                        } else {
                          selectedEmployee.permissions = selectedEmployee.permissions.filter(p => p !== permission.id);
                        }
                        setSelectedEmployee({...selectedEmployee});
                      }}
                    />
                    <span className="permission-label">{permission.label}</span>
                    <span className="permission-desc">{permission.description}</span>
                  </label>
                </div>
              ))}
            </div>
            
            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setShowPermissionsModal(false)}>
                Cancel
              </button>
              <button className="save-btn" onClick={() => setShowPermissionsModal(false)}>
                Save Permissions
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}