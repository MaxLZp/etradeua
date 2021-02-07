SELECT id, login, data, COUNT(login)
FROM Users
GROUP BY login
HAVING COUNT(login) > 1
ORDER BY login