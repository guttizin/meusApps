<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		// var_dump('aeae');
		// $active_group = 'postgres12';
		// $db = $this->load->database($active_group);
		// var_dump($this->db);

		// $db['postgres12'] = array(
		// 	'dsn'	=> '',
		// 	'hostname' => 'localhost',
		// 	'username' => 'postgres',
		// 	'password' => 'postgres',
		// 	'database' => 'postgres',
		// 	'port'     => '5432',
		// 	'dbdriver' => 'postgre',
		// 	'dbprefix' => '',
		// 	'pconnect' => TRUE,
		// 	'db_debug' => (ENVIRONMENT !== 'production'),
		// 	'cache_on' => FALSE,
		// 	'cachedir' => '',
		// 	'char_set' => 'utf8',
		// 	'dbcollat' => 'utf8_general_ci',
		// 	'swap_pre' => '',
		// 	'encrypt' => FALSE,
		// 	'compress' => FALSE,
		// 	'stricton' => FALSE,
		// 	'failover' => array(),
		// 	'save_queries' => TRUE
		// );

		$config['hostname'] = 'localhost';
		$config['username'] = 'postgres';
		$config['password'] = 'postgres';
		$config['database'] = 'MUBPMCF';
		$config['dbdriver'] = 'postgre';
		$config['dbprefix'] = '';
		$config['pconnect'] = FALSE;
		$config['db_debug'] = TRUE;
		$config['cache_on'] = FALSE;
		$config['cachedir'] = '';
		$config['char_set'] = 'utf8';
		$config['dbcollat'] = 'utf8_general_ci';
		
		// $db2 = $this->load->database($config);
		// var_dump($db2);die;

		$db2 = $this->load->database($config, true);

		$this->load->database();

		$this->db->select('*');
		$this->db->from('aeae');
		// var_dump($this->db->get()->result());

		$this->load->dbutil();

		var_dump($dbs = $this->dbutil->list_databases());



		$db2->select('*');
		$db2->from('coronel');
		// $db2->from('aeae');
		var_dump($db2->get()->result());

		// $db->select('*');
		// $db->from('aeae');
		// $aeae = $db->get()->result();

		// var_dump($aeae);
		// $this->load->view('welcome_message');
	}
}
