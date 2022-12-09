class BaseRepository {
  constructor(entity) {
    this.entity = entity;
  }

  async get(id) {
    return await this.entity.findById(id);
  }

  async getAll() {
    return await this.entity.find({});
  }

  async create(entity) {
    return await this.entity.create(entity);
  }

  async update(id, entity) {
    return await this.entity.findByIdAndUpdate(id, entity, { new: true });
  }

  async delete(id) {
    await this.entity.findByIdAndDelete(id);
    return true;
  }
}

module.exports = BaseRepository;
