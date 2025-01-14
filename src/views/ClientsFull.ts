import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity('client_full')
export class ClientsFull {
	@ViewColumn({ name: 'id' })
	id: number;
	@ViewColumn({ name: 'first_name' })
	firstName: string;
	@ViewColumn({ name: 'last_name' })
	lastName: string;
	@ViewColumn({ name: 'national_id' })
	nationalId: string;
	@ViewColumn({ name: 'type_title' })
	typeTitle: string;
	@ViewColumn({ name: 'tel' })
	tel: string;
}
