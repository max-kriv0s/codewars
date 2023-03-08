select 
  INITCAP (CONCAT(firstname, ' ', lastname)) as shortlist
from Elves
where firstname LIKE '%tegil%'
  or lastname LIKE '%astar%'