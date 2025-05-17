"use client";
import React, { useState } from 'react';
import "./UsersManagement.css";
import { FiEdit, FiFilter, FiSearch, FiX, FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function UsersManagementPage() {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // Filter state
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    name: '',
    email: '',
    status: '',
  });

  // Edit state
  const [editMode, setEditMode] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Mahmoud",
      email: "mahmoud@gmail.com",
      status: "active",
      creationDate: "22-05-2024",
      reservations: 3,
      avatar: "M"
    },
    {
      id: 2,
      name: "Daniel",
      email: "daniel@gmail.com",
      status: "inactive",
      creationDate: "17-12-2023",
      reservations: 0,
      avatar: "D"
    },
    {
      id: 3,
      name: "Amine",
      email: "amine@gmail.com",
      status: "active",
      creationDate: "17-12-2023",
      reservations: 1,
      avatar: "D"
    },
    {
      id: 4,
      name: "ayoub",
      email: "ayoub@gmail.com",
      status: "inactive",
      creationDate: "17-12-2023",
      reservations: 10,
      avatar: "D"
    },
   
    {
      id: 5,
      name: "amira",
      email: "amria@gmail.com",
      status: "active",
      creationDate: "17-12-2023",
      reservations: 4,
      avatar: "D"
    },
   
    {
      id: 6,
      name: "Daniel",
      email: "daniel@gmail.com",
      status: "inactive",
      creationDate: "17-12-2023",
      reservations: 0,
      avatar: "D"
    },
   
   
  ]);

  // Filter handlers
  const handleFilterToggle = () => {
    setFilterOpen(!filterOpen);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const filteredUsers = users.filter(user => {
    return (
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      (filters.status === '' || user.status === filters.status)
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Edit handlers
  const handleEditToggle = () => {
    setEditMode(!editMode);
    setEditingUser(null);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleSaveEdit = (updatedUser) => {
    setUsers(users.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    ));
    setEditingUser(null);
  };

  return (
    <div className="usersManagementPageClass">
      <div className="pageHeader">
        <div className="headerLeft">
          <h1 className="pageTitle">Manage Users</h1>
          <p className="pageDescription">Administer and oversee user accounts</p>
        </div>
        
        <div className="headerActions">
          <button 
            className={`actionButton filterButton ${filterOpen ? 'active' : ''}`}
            onClick={handleFilterToggle}
          >
            <FiFilter className="buttonIcon" />
            <span>{filterOpen ? 'Hide Filters' : 'Show Filters'}</span>
          </button>
          <button 
            className={`actionButton editButton ${editMode ? 'active' : ''}`}
            onClick={handleEditToggle}
          >
            <FiEdit className="buttonIcon" />
            <span>{editMode ? 'Done Editing' : 'Edit Users'}</span>
          </button>
        </div>
      </div>

      {filterOpen && (
        <div className="filterPanel">
          <div className="filterGroup">
            <div className="inputWithIcon">
              <FiSearch className="inputIcon" />
              <input
                type="text"
                name="name"
                placeholder="Search by name..."
                value={filters.name}
                onChange={handleFilterChange}
              />
            </div>
          </div>
          <div className="filterGroup">
            <div className="inputWithIcon">
              <FiSearch className="inputIcon" />
              <input
                type="text"
                name="email"
                placeholder="Search by email..."
                value={filters.email}
                onChange={handleFilterChange}
              />
            </div>
          </div>
          <div className="filterGroup">
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="statusSelect"
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      )}

      <div className="usersTableSection">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Users List</h2>
          <span className="userCount">{filteredUsers.length} users total</span>
        </div>
        
        <div className="tableWrapper">
          <table className="usersTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email Address</th>
                <th>Account State</th>
                <th>Creation Date</th>
                <th>Number of Reservations</th>
                {editMode && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {currentUsers.map(user => (
                <tr key={user.id} className={editingUser?.id === user.id ? 'editing' : ''}>
                  <td>
                    <div className="userInfo">
                      <div className="userAvatar" style={{ backgroundColor: getRandomColor() }}>
                        {user.avatar}
                      </div>
                      {editingUser?.id === user.id ? (
                        <input
                          type="text"
                          value={editingUser.name}
                          onChange={(e) => setEditingUser({...editingUser, name: e.target.value})}
                        />
                      ) : (
                        <span className="userName">{user.name}</span>
                      )}
                    </div>
                  </td>
                  <td>
                    {editingUser?.id === user.id ? (
                      <input
                        type="email"
                        value={editingUser.email}
                        onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
                      />
                    ) : user.email}
                  </td>
                  <td>
                    {editingUser?.id === user.id ? (
                      <select
                        value={editingUser.status}
                        onChange={(e) => setEditingUser({...editingUser, status: e.target.value})}
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    ) : (
                      <span className={`statusBadge ${user.status}`}>
                        {user.status}
                      </span>
                    )}
                  </td>
                  <td>{user.creationDate}</td>
                  <td>{user.reservations}</td>
                  {editMode && (
                    <td>
                      {editingUser?.id === user.id ? (
                        <div className="actionButtons">
                          <button className="iconButton saveButton" onClick={() => handleSaveEdit(editingUser)}>
                            <FiCheck />
                          </button>
                          <button className="iconButton cancelButton" onClick={() => setEditingUser(null)}>
                            <FiX />
                          </button>
                        </div>
                      ) : (
                        <button className="iconButton editButton" onClick={() => handleEditUser(user)}>
                          <FiEdit />
                        </button>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="tablePagination">
          <button 
            className="paginationButton prev"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FiChevronLeft />
          </button>
          <div className="paginationNumbers">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={currentPage === index + 1 ? 'active' : ''}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button 
            className="paginationButton next"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper function for random avatar colors
function getRandomColor() {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
    '#FFEEAD', '#D4A5A5', '#9B59B6', '#3498DB'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
