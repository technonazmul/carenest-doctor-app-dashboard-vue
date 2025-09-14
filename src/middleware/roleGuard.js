export function requireRole(allowedRoles) {
  return (to, from, next) => {
    const currentRole = localStorage.getItem("role") || "other";

    console.log("Role Guard - Current Role:", currentRole);
    console.log("Role Guard - Allowed Roles:", allowedRoles);
    console.log("Role Guard - Route:", to.path);

    // Convert single role to array for consistency
    const rolesArray = Array.isArray(allowedRoles)
      ? allowedRoles
      : [allowedRoles];

    // Check if current role is in allowed roles (case-insensitive)
    const hasAccess = rolesArray.some(
      (role) => role.toLowerCase() === currentRole.toLowerCase()
    );

    console.log("Role Guard - Has Access:", hasAccess);

    if (hasAccess) {
      next(); // User has access, continue to route
    } else {
      // Redirect to appropriate page based on role or show 403
      console.warn("Access denied - redirecting to 403");
      next("/error-403"); // You can create this page or redirect to dashboard
    }
  };
}

// Optional: Helper function to check permissions in components
export function hasPermission(requiredRoles, userRole = null) {
  const currentRole = userRole || localStorage.getItem("role") || "support";
  const rolesArray = Array.isArray(requiredRoles)
    ? requiredRoles
    : [requiredRoles];

  return rolesArray.some(
    (role) => role.toLowerCase() === currentRole.toLowerCase()
  );
}
