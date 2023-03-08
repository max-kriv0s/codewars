select
  s1.senshi_name as sailor_senshi, 
  s1.real_name_jpn as real_name,
  c1.name as cat,
  sh.school as school  
from sailorsenshi s1
left join cats c1
  on s1.cat_id = c1.id
left join schools sh
  on s1.school_id = sh.id