json.jobs do |json|
  json.array!(@jobs) do |job|
    json.id job.id
    json.company job.company
    json.email job.email
    json.date_posted job.date_posted
    json.date_emailed job.date_emailed
    json.email_template job.email_template
    json.addressed_to job.addressed_to
    json.notes job.notes
  end
end
