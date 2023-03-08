select 
  name,
  sum(won) as won,
  sum(lost) as lost
from fighters
where move_id not in (
  select
    id 
  from winning_moves
  where move in ('Hadoken', 'Shouoken', 'Kikoken')
  )
GROUP BY name
order by won DESC
limit 6