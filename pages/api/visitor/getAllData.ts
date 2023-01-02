import { NextApiResponse, NextApiRequest } from 'next'
import axios from 'utils/http-anxios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { propertyid, startdate, enddate },
  } = req

  if (!propertyid || propertyid === '')
    return res.status(500).send({
      result: 'error',
      message: 'propertyid is empty',
    })

  if (!startdate || startdate === '')
    return res.status(500).send({
      result: 'error',
      message: 'propertyid is empty',
    })
  if (!enddate || enddate === '')
    return res.status(500).send({
      result: 'error',
      message: 'propertyid is empty',
    })

  const query =
    'SELECT ' +
    //'timestamp, ' +
    //'document_id, ' +
    'property_id, ' +
    'unit_id, ' +
    'check_in, ' +
    'block_id, ' +
    'block_name, ' +
    // 'check_in_type, ' +
    // 'house_number, ' +
    'purpose_of_visit, ' +
    // 'registration_duration, ' +
    // 'reported_wrong_visitor, ' +
    // 'self_check_in, ' +
    // 'status, ' +
    'type, ' +
    // 'unit_title, ' +
    // 'visit_date, ' +
    // 'visitor_list, ' +
    // 'walk_in, ' +
    // 'allow_visit_duration, ' +
    // 'check_out_type, ' +
    // 'check_out, ' +
    // 'check_in_by, ' +
    // 'check_out_by, ' +
    // 'created_by, ' +
    // 'extra_action, ' +
    // 'id_number_list, ' +
    // 'media_list, ' +
    // 'pre_visitor_id, ' +
    // 'repeat_option, ' +
    // 'other_reason, ' +
    // 'uid_checkin_list, ' +
    // 'user_list, ' +
    // 'vehicle_number, ' +
    // 'visitor_name_list, ' +
    // 'visitor_pass_number_list, ' +
    // 'visit_start_time ' +
    'FROM ( ' +
    `SELECT AS VALUE ARRAY_AGG(t ORDER BY timestamp DESC LIMIT 1)[OFFSET(0)] ` +
    'FROM `redideas-79527.firestore_export.visitor_changelog` t ' +
    `WHERE operation!= "DELETE" ` +
    `AND property_id = "${propertyid}" ` +
    `AND check_in >= TIMESTAMP("${startdate}") ` +
    `AND check_in <= TIMESTAMP("${enddate}") ` +
    `GROUP BY document_id ` +
    ') ORDER BY check_in DESC'

  try {
    const fetchData = await axios.post('bigQueryRequest', {
      query: query,
    })
    return res.status(200).json(fetchData.data)
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error.'

    return res.status(500).send({
      result: 'error',
      message: message,
    })
  }
}
