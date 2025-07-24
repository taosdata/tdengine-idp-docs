---
title: Managing Users and Permissions
---

## Users

IDMP uses email addresses as user IDs. The first person to activate or register for IDMP is automatically granted superuser status. This superuser can then invite others to join IDMP by entering their email addresses in the system.

Invited users will receive an email containing a link. By clicking the link, entering their personal information, and setting a password, they gain access to IDMP. If a user forgets their password, they can click "Forgot Password" on the login page to reset it via email. For security reasons, the superuser does not have the authority to reset other users’ passwords.

## Roles

DMP uses role-based access control. Each role defines access permissions—View, Add, Delete, and Edit—for one or more resources. Accessible resources include elements, dashboards, analyses, events, notification rules, element templates, event templates, notification rule templates, units of measurement, categories, connections, users, roles, system configurations, and more.

The system comes with several predefined roles, but you can also create custom roles as needed.

A user can be assigned multiple roles, and their effective permissions are the union of all assigned roles.

## Element Access Control

Due to their hierarchical structure, elements in IDMP require special handling for access control. Even if a role has permission to access elements, the specific elements a user can operate on are further restricted. After a user is assigned a role with element access, the administrator must also specify top-level element nodes that the user is allowed to access. The user can view and operate on all elements under these top-level nodes, but cannot access any elements above them in the hierarchy. A user can be given access to multiple top-level element nodes.

Elements the user has no access to are completely hidden in the tree structure after login. Any associated attributes, analyses, events, panels, or dashboards linked to these inaccessible elements are also out of reach—ensuring robust data security.

## User Groups

Support for user groups is scheduled to be released by the end of October 2025.
