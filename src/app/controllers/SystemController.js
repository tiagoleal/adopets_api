import IndexSystemService from '../services/system/IndexSystemService';

class SystemController {
  async index(req, res) {
    const systemLogs = await IndexSystemService.index();
    return res.json(systemLogs);
  }
}

export default new SystemController();
